<?php
class VeiculosController extends \HXPHP\System\Controller
{
    public function __construct($configs)
	{
		$alo = $configs;
		parent::__construct($configs);
		
		$this->view->setHeader('headerJson');
		$this->view->setFooter('footerJson');
	}
	public function apiAction($id = 0){
		$this->view->setFile('index');
		$tipo = $this->request->getMethod();
		if ($tipo == 'POST') {
			$carro = new Car();
			$data = json_decode(file_get_contents("php://input"), true);
			$carro->veiculo = $data['veiculo'];
			$carro->marca = $data['marca'];
			$carro->ano = $data['ano'];
			$carro->descricao = $data['descricao'];
			$carro->vendido = $data['vendido'];
			$carro->created_at = date('Y-m-d H:i:s');
			$carro->updated_at = date('Y-m-d H:i:s');
			$carro->save();
			$this->view->setVar('tp','1');
			$json = array
			(
				"id" => $carro->id
			);
			  echo json_encode($json);
			return;
		}else{
			if($tipo == 'PUT'){
				if($id){
					$carro = Car::find_by_id($id);
					if($carro){
						$data = json_decode(file_get_contents("php://input"), true);
						$carro->veiculo = $data['veiculo'];
						$carro->marca = $data['marca'];
						$carro->ano = $data['ano'];
						$carro->descricao = $data['descricao'];
						$carro->vendido = $data['vendido'];
						$carro->updated_at = date('Y-m-d H:i:s');
						$carro->save();
						$this->view->setVar('tp','2');
					}
				}
				return;
			}
			if($tipo == 'DELETE'){
				if($id){
					$carro = Car::find_by_id($id);
					if($carro){
						$carro->delete();
						$this->view->setVar('tp','3');
					}
				}
				return;
			}
			if($tipo == 'GET'){
				$this->view->setVar('tp','4');
				if($id){
					$veiculo = Car::find_by_id($id);
					if($veiculo){
						$this->view->setVar('veiculos',1);
						$this->view->setVar('veiculo',$veiculo);
					}else{
						$v = 0;
						echo json_encode('Veiculo Inexistente');
						$this->view->setVar('veiculos',$v);
					}
				}else{
					$veiculos = Car::all();
					if($veiculos){
						$this->view->setVar('veiculos',$veiculos);
					}else{
						echo json_encode('Não Existem Veiculos');
					}
				}
					
			}	
		}
	}
}