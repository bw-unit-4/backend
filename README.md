# backend
backend data to validate front-end

PLEASE READ!!!

PROJECT STATUS:

Backend should be fully built. It seems as though there are some errors with knex that I cannot resolve, but the code should be good as I modeled it after my passing sprints.

/api/auth/register	Requires a username and password and phone-number/string. Registers a new user.

/api/auth/login	Requires a username and password. Logs the user in and returns token.

/api/users/plants	Returns an array of plant objects belonging to logged in user.

/api/users/	Returns information about the user.

/api/users/	Updates User Information

PLANTS ARE RESTRICTED
Method used is URL description

/api/plants	Returns an array filled with plant objects.

/api/plants/:id	Returns a plant object with the specified plant_id.

/api/plants	Requires nickname, species, h20, and user_id .

/api/plants/:id	Removes the plant with the specified plant_id.

/api/plants	Requires nickname, species, h20, and user_id .


MVP
1. `user` can sign-up / create an account by providing a unique `username`, a valid mobile `phoneNumber` and a `password`. 
2. `user` can login to an authenticated session using the credentials provided at account creation / signup.
3. Authenticated `user` can Create, Update and Delete a `plant` object. At a minimum, each `plant` must have the following properties: 
    - `id`: Integer
    - `nickname`: String
    - `species` : String
    - `h2oFrequency`: Type determined by implementation
    - `image`: (optional)
4. Authenticated `user` can view a list of created `plants`.  A `plant` can be deleted or selected to present `user` with a detail view where `user` can then update any property of the selected `plant`. 
5. Authenticated `user` can update their `phoneNumber` and `password`.
6. Authenticated `user` can update their `phoneNumber` and `password`.


