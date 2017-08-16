<?php

class Controller_Markers extends Controller_Rest
{
	public function action_get()
	{
		$markers = \DummyMarkerGenerator::get();
		$response = [];
		foreach($markers as $marker) {
			$response[] = ['position' => ['lat' => (double)$marker->lat, 'lng' => (double)$marker->lng], 'type' => $marker->type];
		}
		$json_response = json_encode($response, true);
		$this->response("window.onMarkersLoadedCallback({$json_response});");
	}

}
