<?php

namespace Lucian\BgImageBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\Session;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class BgImageController extends Controller
{
	/**
	 * @Route("/", name="_index")
	 * @Method("GET")
	 */
	public function indexAction()
	{
//		return $this->render('LucianBgImageBundle:Default:index.html.twig', array('name' => 'world'));
	}

	/**
	 * @Route("/login", name="_login")
	 * @Template()
	 */
	public function loginAction(Request $request)
	{
		if ($request->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
			$error = $request->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
		}
		else {
			$error = $request->getSession()->get(SecurityContext::AUTHENTICATION_ERROR);
		}

		return array(
			'last_username' => $request->getSession()->get(SecurityContext::LAST_USERNAME),
			'error' => $error,
		);
	}

	/**
	 * @Route("/login_check", name="_security_check")
	 */
	public function securityCheckAction()
	{
		// The security layer will intercept this request
	}

	/**
	 * @Route("/logout", name="_logout")
	 */
	public function logoutAction()
	{
		// The security layer will intercept this request
	}

}
