<?php

class Contact extends Eloquent {
	protected $guarded = array();

	public static $rules = array(
		'first_name'=>'required|min:2|max:255',
		'last_name'=>'required|min:2|max:255',
		'phone_number'=>'required|min:5|max:10',
		'email_address'=>'required|email'
	);

	public static function validate( $data ) {
		return Validator::make($data, static::$rules);
	}

}