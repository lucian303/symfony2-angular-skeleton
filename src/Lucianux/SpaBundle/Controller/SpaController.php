<?php

namespace Lucianux\SpaBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\Security\Core\SecurityContext;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

/**
 * Class SpaController
 *
 * Single page application controller. Sends out our SPA html layout and handles login
 * @todo Move login / security to a different bundle?
 * @package Lucianux\SpaBundle\Controller
 */
class SpaController extends Controller
{
	/**
	 * Forward to login/main app page
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
		return array();
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
