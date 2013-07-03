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
        return $this->render('LucianBgImageBundle:Default:index.html.twig', array('name' => 'world'));
    }
}
