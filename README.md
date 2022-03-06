# backend
backend data to validate front-end
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