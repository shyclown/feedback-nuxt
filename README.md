# feedback-nuxt

## Initial setup

Install packages
`pnpm install`

### Start server

`pnpm run dev`

App will start on `localhost:3000`

# Description of Feedback App

This is a feedback app built with Nuxt.js.

- Users can create feedback.
- Users can see feedbacks created by other users.

### Database

Initial sqlite database is already created.
- I just pushed the whole thing in so it can be quickly run


- It can be deleted (you need to delete also whole migrations folder together with db) and recreated using 
`pnpm run db:generate`
and `pnpm run db:migrate`.
