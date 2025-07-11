from faker import Faker
fake = Faker()

def generate_fake_user():
    return {"name": fake.name(), "email": fake.email()}