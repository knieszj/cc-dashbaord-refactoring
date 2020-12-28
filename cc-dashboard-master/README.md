### The Commander's Dashboard (CC-Dashboard) provides a situational awareness update for all users
The user will have an all-inclusive administrative tracking system. That allows the individual to spend more time focused on the mission and less time tracking down monthly/yearly requirements.

### Current implementation
The CC-Dashboard provides a quick visual representation of readiness utilizing predetermined status updates. Status updates are tracked by the following standards below:

Status checks of individuals:
- Current 
- Not current
- Overdue 

This allows for a quick visual representation of what is accomplished or missing. Providing leaders with a transparent readiness check of their subordinates, and everyone with a one stop readiness tracker. The color scheme for the 
different status updates are as follows:

Color scheme:
- Current: Green
- Not current: Yellow
- Overdue: Red

Color scheme definitions dependent upon the category:
- Green - (Passed, complete, or on-time)
- Yellow - (upcoming, to be completed)
- Red - (Overdue)


A user will need to login with their Common Access Card (CAC) certificates. After, a user logins access will be granted with an appropriate generated dashboard environment. This is determined based off of job status and working title example environments below:

Commanders: access to the dashboard environment that includes the following features:
         - Highest user access all-inclusive dashboard environment
         - Access to all flights within his or her squadron
         - Access to all personnel within those flights
         - Status checks for the flight and personnel

Chief Enlisted Member: access to the dashboard environment that includes the following features:
         - Highest user access all-inclusive dashboard environment
         - Access to all flights within his or her squadron
         - Access to all personnel within those flights
         - Status checks for the flight and personnel

Officer in Charge: access to the dashboard environment that includes the following features:
         - Controlled access limited to job scope
         - Access to the flight personnel
         - Status checks for the personnel

Flight Chiefs: access to the dashboard environment that includes the following features:
         - Controlled access limited to job scope
         - Access to the flight personnel
         - Status checks for the personnel

Personnel: access to the dashboard environment that includes the following features:
         - Access to individual information
         - Status checks for individual member

Administrator: access to the dashboard environment that includes the following features:
         - Highest user access all-inclusive dashboard environment
         - Access to all flights within his or her squadron
         - Access to all personnel within those flights
         - Status checks for the flight and personnel
         - Ability to grant, update, and remove access

Once, a user gains access to an appropriate dashboard environment they will be granted with full access within their job scope. All functionality of the application will be rendered appropriately and will track the following
areas of readiness:

Physical Fitness: keeps track of readiness through the status checks mentioned above example
         - Current on PT test or passed: Green 
         - Not current on PT test passed but upcoming: Yellow
         - Overdue on PT test required: Red

Evaluations: keeps track of readiness through the status checks mentioned above example
         - Current with yearly EPR or OPR: Green
         - Not current with yearly EPR or OPR: Yellow
         - Overdue with yearly EPR or OPR: Red

Advanced Distributed Learning (ADLS): keeps track of readiness through the status checks mentioned above example
         - Current with yearly, semi-annual requirements: Green
         - Not current with yearly, semi-annual requirements: Yellow
         - Overdue with yearly, semi-annual requirements: Red

Medical: keeps track of readiness through the status checks mentioned above example
    *** MEDICAL SECTION WILL NOT DISPLAY ANY PII FOR ANYONE JUST READINESS CHECKS ***  
         - Current on vaccines: Green
         - Not current on vaccines: Yellow
         - Overdue on vaccines: Red

The Dashboard environment will display the areas of readiness on one page and depending on your working environment more features will be accessible. All members will be rendered with the areas of readiness displayed in a card format. Depending on access level you may click on the individual elements of the card to see additional details about the flights, and everyone within your working environment. 

When completed with the application logout, Enjoy!

### TODO list
[] Update environment API retrieval database to be auto generated from the already populated Military databases

[] Update dashboard environment so individual cards only display information that is needed for that card

[] Implement a Rank with individual members

[] Implement the ability when ADMIN refactors or add members the application does not need to refresh

[] Implement the ability to have multiple users

[] Implement the ADMIN with the ability to see airmenID's on the dashboard for removal purposes

[] Implement the ability for the ADMIN to to PATCH individual Airman fields

### Current Bugs
[] All area of readiness cards displays the same information

[x] Status colors in modals currently do not update correctly

[] Admin updates, add, and remove features are not tracked until the application refreshes

[] On the ECM cards random memebers may not display certain fields of readiness on the dashboard but displays on the server

[] ADMIN update does not PATCH it only PUTs so all fields must be refilled out when updating

[] When updating members current fields are not read properly on the back end so updates end up with capitalized letters and the values are not registered properly

[] Removing Airmen feature does not remove Airmen from the server

[] Current, and not current are not fully updating on the dashboard
