<?php

namespace Lucianux\SpaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class SpaController
 *
 * Single page application controller. Sends out our SPA html layout and handles login
 *
 * @package Lucianux\SpaBundle\Controller
 */
class SpaController extends Controller
{
	/**
	 * Main SPA app shell page
	 *
	 * @Route("/", name="_index")
	 * @Method("GET")
	 * @Template()
	 */
	public function indexAction()
	{
		return array();
	}

	/**
	 * Login page
	 *
	 * @Route("/login", name="_login")
	 * @Method("GET")
	 */
	public function loginAction()
	{
		return new Response();
	}

	/**
	 * @Route("/api/v1/login_check", name="_security_check")
	 */
	public function securityCheckAction()
	{
		// Intercepted by security service
	}

	/**
	 * @Route("/logout", name="_logout")
	 */
	public function logoutAction()
	{
		// Intercepted by security service
	}
}
