<?php

class Controller_User extends Controller_Template
{

	public function action_index()
	{
		$this->template->title = "Strona główna";
		$this->template->content = View::forge("user/index");
	}

}
