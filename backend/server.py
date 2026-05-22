from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr, Field
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI(title="Vanguard Citadel Sec API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ----- Models -----
class ContactSubmission(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=3, max_length=40)
    company: str | None = Field(default=None, max_length=160)
    message: str = Field(min_length=5, max_length=4000)


class ContactResponse(BaseModel):
    success: bool
    message: str
    submitted_at: str


# ----- Routes -----
@api_router.get("/")
async def root():
    return {"message": "Vanguard Citadel Sec API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "service": "vanguard-citadel-sec"}


@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(payload: ContactSubmission):
    """
    Accepts contact form submissions.
    Logs submission server-side. Email delivery will be wired up later
    (planned admin: priyanka@vanguardcitadelsec.com).
    """
    try:
        submitted_at = datetime.now(timezone.utc).isoformat()
        logger.info(
            "Contact submission | name=%s email=%s phone=%s company=%s message_len=%d",
            payload.name,
            payload.email,
            payload.phone,
            payload.company or "-",
            len(payload.message),
        )
        return ContactResponse(
            success=True,
            message="Thank you for reaching out. Our team will contact you within one business day.",
            submitted_at=submitted_at,
        )
    except Exception as e:  # pragma: no cover
        logger.exception("Failed to handle contact submission: %s", e)
        raise HTTPException(status_code=500, detail="Unable to process submission. Please try again later.")


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger("vanguard.api")
