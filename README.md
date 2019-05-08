# Would You Rather Project

This application is a way to play "Would you rather?".  You can
'login' by selecting a user.  Once the user logs in, a list of unanswered questions appear.  In order to see your previously answered questions, select 'Answered' on the switcher above the list.  To anser a question click "view poll", select your answer, then click submit.  In order to see the leaderboard, which represents who has asked and answered the most questions, select the "Leaderboard" tab.  If you want to add a new question, select the "Add Question" tab.  Once there, fill in two options and submit.  When you want to end your session, select "Logout"

## Running the Project

Run these commands in your terminal

* `npm install`
* `npm start`

Your default browser should open, but if it doesn't navigate to http://localhost:3000/

## Modifications to the API

To handle the scenario where a new question is created then attempted to be answered, I added a reject clause in the promise.  If the question doesn't exist within the list of execptions, the Promise is rejected with an error.  This helps me practice optimistic updates.
