<?php

use Illuminate\Database\Migrations\Migration;

class AddPhoneNumberColumn extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::table('contacts', function($table) {
			$table->string('phone_number')->after('last_name');
		});

	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::table('contacts', function($table)
		{
			$table->dropColumn('phone_number');
		});
	}

}