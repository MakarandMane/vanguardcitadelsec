"""Backend API tests for Vanguard Citadel Sec landing site."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://security-hub-151.preview.emergentagent.com").rstrip("/")


@pytest.fixture(scope="module")
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ----- Health endpoint -----
class TestHealth:
    def test_health_ok(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/health", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "healthy"
        assert "service" in data

    def test_root(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/", timeout=15)
        assert r.status_code == 200
        data = r.json()
        assert data.get("status") == "ok"


# ----- Contact endpoint -----
class TestContact:
    valid_payload = {
        "name": "TEST_Jane Doe",
        "email": "TEST_jane@example.com",
        "phone": "+91 9876543210",
        "company": "TEST_Acme",
        "message": "Interested in VAPT services for our web app.",
    }

    def test_contact_success(self, api_client):
        r = api_client.post(f"{BASE_URL}/api/contact", json=self.valid_payload, timeout=20)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data.get("success") is True
        assert isinstance(data.get("message"), str) and len(data["message"]) > 0
        assert isinstance(data.get("submitted_at"), str) and len(data["submitted_at"]) > 0

    def test_contact_without_company_ok(self, api_client):
        payload = dict(self.valid_payload)
        payload.pop("company")
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 200, r.text
        assert r.json().get("success") is True

    def test_contact_invalid_email(self, api_client):
        payload = dict(self.valid_payload)
        payload["email"] = "not-an-email"
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 422

    def test_contact_missing_name(self, api_client):
        payload = dict(self.valid_payload)
        payload.pop("name")
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 422

    def test_contact_missing_message(self, api_client):
        payload = dict(self.valid_payload)
        payload.pop("message")
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 422

    def test_contact_message_too_short(self, api_client):
        payload = dict(self.valid_payload)
        payload["message"] = "hi"  # < 5 chars
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 422

    def test_contact_empty_name(self, api_client):
        payload = dict(self.valid_payload)
        payload["name"] = ""
        r = api_client.post(f"{BASE_URL}/api/contact", json=payload, timeout=20)
        assert r.status_code == 422
