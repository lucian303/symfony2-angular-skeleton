<?php

namespace Lucian\BgImageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Bundle\FrameworkBundle\Routing\Router;
use Symfony\Component\Security\Core\SecurityContext;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class BgImageController extends Controller
{
	/**
	 * @Route("/", name="_index")
	 * @Method("GET")
	 * @Template();
	 */
	public function indexAction()
	{
		return array('name' => 'world');
	}

	/**
	 * @Route("/login", name="login")
	 * @Template()
	 */
	public function loginAction()
	{
		return array();
	}

	/**
	 * @Route("/login_check", name="_security_check")
	 */
	public function securityCheckAction(Request $request)
	{
	}

	/**
	 * @Route("/logout", name="_logout")
	 */
	public function logoutAction()
	{
	}

	/**
	 * @Route("/bgimage", name="_bgimage")
	 */
	public function bgImageAction()
	{
		return new Response("bgimage");
	}

}
