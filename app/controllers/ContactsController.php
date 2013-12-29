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

		$validation = Contact::validate( $input );

		if ( $validation->passes() ) {
			$newRec = Contact::create([
				'first_name' => $input['first_name'],
				'last_name' => $input['last_name'],
				'phone_number' => $input['phone_number'],
				'email_address' => $input['email_address'],
				'description' => $input['description']
			]);

			if ($newRec) return ['message'=>'Successfully added record'];
		} else {
			//dd($validation->messages()->all());
			$errors = $validation->messages()->all();
			return ['errors'=>$errors];
			//return $validation->messages();
		}
	
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
		//
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
		if ( isset($contact) ) $contact->delete();
		//if ( !($contact->delete() ) ) return ['message'=>"Something went wrong"];
		return ['message'=>'Successfully deleted record'];
	}

}
