<?php

class DummyMarkerGenerator {

	static public function get() {
		return [
			Model_Marker::forge(['lat' => "52.388632", 'lng' => "16.868023", 'type' => 1]),
			Model_Marker::forge(['lat' => "52.388599", 'lng' => "16.871193", 'type' => 2]),
			Model_Marker::forge(['lat' => "52.387319", 'lng' => "16.868822", 'type' => 3])
		];
	}
}