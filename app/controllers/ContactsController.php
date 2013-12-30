<?php

class ContactsController extends BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{	
		$contacts = Contact::all();
		//return View::make('master')->with('contacts',$contacts);
        //return View::make('contacts.index');
        return $contacts;
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
        return View::make('contacts.create');
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
	
		$input = Input::all();
		$res = [];
		$validation = Contact::validate( $input );

		try {
			if ( $validation->passes() ) {
				$desc = isset($input['description'])?$input['description']:"";
				$newRec = Contact::create([
					'first_name' => $input['first_name'],
					'last_name' => $input['last_name'],
					'phone_number' => $input['phone_number'],
					'email_address' => $input['email_address'],
					'description' => $desc
				]);
				if ($newRec) return $res = ['success'=>true,'message'=>'Successfully added record'];
			} else {
				$errors = $validation->messages()->all();
				return $res = ['success'=>false, 'message'=>$errors];
			}
		} catch(Exception $e) {
			return $res = ['success'=>'stop', 'message'=>'something went wrong'];
		}
		return $res;
		/*if ( $validation->passes() ) {
			$newRec = Contact::create([
				'first_name' => $input['first_name'],
				'last_name' => $input['last_name'],
				'phone_number' => $input['phone_number'],
				'email_address' => $input['email_address'],
				'description' => isset($input['description'])
			]);
			if ($newRec) return $res = ['success'=>true,'message'=>'Successfully added record'];
		} else {
			$errors = $validation->messages()->all();
			return $res = ['success'=>false, 'message'=>$errors];
		}*/

	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
        return View::make('contacts.show');
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
        return View::make('contacts.edit');
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{	

		$contact = Contact::find($id); 
		$input = Input::all();
		
		$res = [];
		$validation = Contact::validate( $input );

		try {
			if ( $validation->passes() ) {
				$contact->first_name = $input['first_name'];
				$contact->last_name = $input['last_name'];
				$contact->phone_number = $input['phone_number'];
				$contact->email_address = $input['email_address'];
				$contact->description = $input['description'];
				if ($contact->save() ) return $res = ['success'=>true,'message'=>'Successfully updated contact'];
			} else {
				$errors = $validation->messages()->all();
				return $res = ['success'=>false, 'message'=>$errors];
			}
		} catch(Exception $e) {
			return $res = ['success'=>'stop', 'message'=>'Something went wrong'];
		}
		return $res;
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$contact = Contact::find($id); 
		$res = [];

		try{
			if ( isset($contact) ) $contact->delete();
			$res = ['success'=>true,'message'=>'Successfully deleted contact'];
		} catch (Exception $e) {
			return $res = ['success'=>'stop', 'message'=>'Something went wrong'];
		}
		return $res;
	}

}
