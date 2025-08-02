# Reddit Post for r/webdev

## Title: 
**Tired of API testing headaches? Built a tool to solve the "backend isn't ready yet" problem**

## Post Content:

Hey r/webdev! 👋

**TL;DR**: Built DevMock - a visual mock API tool that's simpler than JSON Server but more powerful than static files. Looking for feedback from fellow developers.

---

## The Problem

We've all been there:
- "The API will be ready next week" (it wasn't)
- Spending more time setting up mocks than actually coding
- Can't test error scenarios or network delays
- Switching between 5 different tools depending on the project

## What I Built

DevMock is a web-based mock API tool that tries to hit the sweet spot between simplicity and power:

**✅ What works well:**
- Visual interface (no more editing JSON files)
- Configure delays, error rates, custom headers
- Request logging and analytics
- Realistic fake data generation
- Export to Postman collections

**🔧 Tech Stack:**
- FastAPI (Python) backend
- React + Tailwind frontend
- SQLite for data storage

## Real Example

Instead of this JSON Server setup:
```bash
npm install -g json-server
echo '{"users": [{"id": 1, "name": "John"}]}' > db.json
json-server --watch db.json --port 3001
```

You just:
1. Open DevMock web interface
2. Create endpoint: `GET /api/users`
3. Set response, delays, error probability
4. Done - your mock API is running

## Questions for the Community

**What I'm trying to validate:**
1. Is this a problem you actually face?
2. What features would make this useful for your workflow?
3. Cloud-hosted vs self-hosted preference?

I've set up a [landing page](http://localhost:5173) to gauge interest, but honestly more interested in your feedback than signups.

**What am I missing?** What would make you actually use this vs your current solution?

---

**Edit:** Thanks for all the feedback! Common requests I'm seeing:
- Docker support ✅ (planned)
- GraphQL mocking 🤔 (investigating)
- Team collaboration features ✅ (on roadmap)

Keep the feedback coming - it's incredibly valuable for prioritizing features!