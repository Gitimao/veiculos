<?php
class IndexController extends \HXPHP\System\Controller
{
    public function __construct($configs)
	{
		parent::__construct($configs);
		$url = "http://localhost/veiculos/api";
        $ch = curl_init();
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL,$url);
		$result=curl_exec($ch);
		curl_close($ch);
		$resultado = json_decode($result, true);
        $this->view->setVar('veiculos',$resultado);
	}
}