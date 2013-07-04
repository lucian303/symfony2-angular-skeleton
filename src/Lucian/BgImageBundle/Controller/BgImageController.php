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

/**
 * Build a 2-3 page website with single page view concept with JavaScript mvc and REST service.
 * The concept of the site is choose you background.
 *
 * After login the user can select a file to upload and that becomes the background image of the landing page.
 * Page 1 is login at least need 3 different users who can login.
 * Page 2 is landing page which will show the image uploaded and
 * page 3 is upload the background image you like.
 * Page 2 and 3 should have a logout button.
 *
 * Class BgImageController
 * @package Lucian\BgImageBundle\Controller
 */
class BgImageController extends Controller
{
	/**
	 * Forward to login/main app page
	 *
	 * @Route("/", name="_index")
	 * @Method("GET")
	 */
	public function indexAction()
	{
		return $this->forward('LucianBgImageBundle:BgImage:login');
	}

	/**
	 * Login / main app page
	 *
	 * @Route("/login", name="_login")
	 * @Template()
	 */
	public function loginAction()
	{
		return array();
	}

	/**
	 * @Route("/login_check", name="_security_check")
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

	/**
	 * Sets a background image
	 *
	 * @Route("/bgimage", name="_post_bgimage")
	 * @Method("POST")
	 */
	public function bgImagePostAction()
	{
		return new Response("bgimage post");
	}

	/**
	 * Gets the current background image, if any
	 *
	 * @Route("/bgimage", name="_get_bgimage")
	 * @Method("GET")
	 */
	public function bgImageGetAction()
	{
		return new Response("bgimage get");
	}

}
