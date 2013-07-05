<?php

namespace Lucian\BgImageBundle\Controller;

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
	 * @Route("/bgImage", name="_post_bgimage")
	 * @Method("POST")
	 */
	public function bgImagePostAction(Request $request)
	{
		try {
			/** @var $bgImage \Symfony\Component\HttpFoundation\File\UploadedFile */
			$bgImage = $request->files->get('bgImageFile');
			$newName = sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'bgImage';
			$bgImage->move(sys_get_temp_dir(), 'bgImage');

			$_SESSION['bgImage'] = $newName; // use simple php session
			$_SESSION['bgImageMimeType'] = $bgImage->getClientMimeType();

			$response = new JsonResponse(array('success' => true));
		} catch (\Exception $e) {
			$response = new JsonResponse(array('success' => false), 400);
		}

		return $response;
	}

	/**
	 * Gets the current background image, if any
	 *
	 * @Route("/bgImage", name="_get_bgimage")
	 * @Method("GET")
	 */
	public function bgImageGetAction()
	{
		if (isset($_SESSION['bgImage']) && isset($_SESSION['bgImageMimeType'])) {
			$fileName = $_SESSION['bgImage'];
			$imageData = file_get_contents($fileName);

			if ($imageData) {
				$response = new Response($imageData);
				$response->headers->set('Content-Type', $_SESSION['bgImageMimeType']);
				$response->expire();
			}
			else {
				$response = new JsonResponse(array('success' => false), 400);
			}
		}
		else {
			$response = new JsonResponse(array('success' => false), 400);
		}

		return $response;
	}
}
