def export_to_postman(mocks):
    return {
        "info": {"name": "DevMock Export", "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"},
        "item": [
            {
                "name": mock.name,
                "request": {
                    "method": mock.method,
                    "header": [],
                    "url": {"raw": "http://localhost:8000" + mock.path, "path": [mock.path.strip("/")]}
                }
            } for mock in mocks
        ]
    }