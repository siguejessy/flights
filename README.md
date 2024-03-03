## Flights App 🛩️🌎🌍🌏

#### 🌐 Built on Express Framework with Mongoose & MongoDB.


---

## MVP:
Definition of done is to implement the following user stories:

- AAU, I want to view a list of all flights (`index` functionality) that displays each flight's airline, airport, flight no., and departure date/time (consider formatting the `departs` property).
	
- AAU, I want to create flights by entering the information on a page (`new` functionality) that has a form and submitting it.

- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
	- `ALL FLIGHTS`, and
	- `ADD FLIGHT`

- AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (`show` view)

- AAU, when viewing the details page (`show` view) for a flight, I want to be able to add a destination for that flight, including its `arrival` date/time & one of the established airport codes
  
- AAU, when viewing the details page (`show` view) for a flight, I want to see a list of that flight's `destinations` (`airport` & `arrival`)

- AAU, when viewing the detail page for a flight, I want to view a list of the tickets that have been created for that flight
<br>
---
#### Stretch Goals

__1. Code these additional User Stories:__

- AAU, I want to view the list of flights by departure date in ascending order.
	
- AAU, I want the flights in the list to be displayed using red text if the flight's departure date has passed.

1. Sort the list of `destinations` for a flight by the `arrival` date/time in ascending order.

2. Style the views.

3. When adding a destination for a flight, exclude the airports listed in the `<select>` that have already been used by other destinations and/or the flight's `airport`.
4. Add a feature to delete a flight's ticket.

__2. Styling!__
