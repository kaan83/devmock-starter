def generate_from_openapi(schema: dict):
    return {"mock": "data from OpenAPI"}

def generate_from_curl(curl_cmd: str):
    return {"mock": "data from cURL"}

def generate_gpt_response(schema: dict):
    return {"mock": "realistic GPT data"}