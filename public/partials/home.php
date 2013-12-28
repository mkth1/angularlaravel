<div class="row" ng-controller="FormController">
	<form novalidate id="contact-form" class="form-inline" role="form">
		<div class="form-group">
			<input type="text" ng-model="contact.first_name" class="form-control" placeholder="First name" required>
		</div>

		<div class="form-group">
			<input type="text" ng-model="contact.last_name" class="form-control" placeholder="Last name" required>
		</div>
		<div class="form-group">
			<input type="number" ng-model="contact.phone_number" class="form-control" placeholder="Phone number" required>
		</div>
		<div class="form-group">
			<input type="email" ng-model="contact.email_address" class="form-control" placeholder="Email address" required>
		</div>
		<div class="form-group">
			<input type="text" ng-model="contact.description" class="form-control" placeholder="Description" >
		</div>
		<button ng-click="save(contact)" class="btn btn-success">SAVE</button>
		<button ng-click="reset()" class="btn btn-warning">RESET</button>
	</form>
	<br>
</div>

<div class="row" ng-controller="HomeController">
	<table class="table table-bordered">
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Phone Number</th>
				<th>Email Address</th>
				<th>Description</th>
				<th>Options</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="contact in contacts">
				<td>{{contact.first_name}}</td>
				<td>{{contact.last_name}}</td>
				<td>{{contact.phone_number}}</td>
				<td>{{contact.email_address}}</td>
				<td>{{contact.description}}</td>
				<td>
					<button class="btn btn-primary">Edit</button>
					<button class="btn btn-danger">Delete</button>
				</td>
			</tr>
		</tbody>

	</table>
</div>