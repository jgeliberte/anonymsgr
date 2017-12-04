<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {

	// public function __construct(){
	// 	parent::__construct();
	// }

	public function index() {
		$this->load->view('template/header');
		// $this->load->view('template/nav');
		$this->load->view('home_page');
		$this->load->view('template/footer');
	}
}
