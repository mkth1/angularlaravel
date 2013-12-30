<div class="row" ng-controller="HomeController">

	<form novalidate id="contact-form" class="form-inline" role="form">
		<div class="form-group">
			<input type="text" ng-model="contact.first_name" class="form-control" placeholder="John" required>
		</div>

		<div class="form-group">
			<input type="text" ng-model="contact.last_name" class="form-control" placeholder="Doe" required>
		</div>
		<div class="form-group">
			<input type="number" ng-model="contact.phone_number" class="form-control" placeholder="0443025290" required>
		</div>
		<div class="form-group">
			<input type="email" ng-model="contact.email_address" class="form-control" placeholder="john@doe.com" required>
		</div>
		<div class="form-group">
			<input type="text" ng-model="contact.description" class="form-control" placeholder="Hello ! This is John." >
		</div>
		<button ng-hide="contact.id" ng-click="save(contact)" class="btn btn-success">SAVE</button>
		<button ng-show="contact.id" ng-click="update(contact)" class="btn btn-success">UPDATE</button>
		<button ng-click="reset()" class="btn btn-warning">RESET</button>
	</form>
	<br>

	<table class="table table-bordered table-condensed">
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
					<button class="btn btn-primary" ng-click="edit(contact)">Edit</button>
					<button class="btn btn-danger" ng-click="delete(contact)" >Delete</button>
				</td>
			</tr>
		</tbody>
	</table>
</div>