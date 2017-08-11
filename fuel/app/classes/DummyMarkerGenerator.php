<?php

class DummyMarkerGenerator {

	static public function get() {
		return [
			Model_Marker::forge(['lat' => "52.388632", 'lng' => "16.868023", 'type' => 1]),	//ok
			Model_Marker::forge(['lat' => "52.388599", 'lng' => "16.871193", 'type' => 2]), //ok
			Model_Marker::forge(['lat' => "52.387319", 'lng' => "16.868822", 'type' => 3]), //ok
			Model_Marker::forge(['lat' => "52.428501", 'lng' => "16.933480", 'type' => 2]), //ok
			Model_Marker::forge(['lat' => "52.416747", 'lng' => "16.939612", 'type' => 1]), //ok
			Model_Marker::forge(['lat' => "52.411594", 'lng' => "16.929708", 'type' => 3]), //ok
			Model_Marker::forge(['lat' => "52.406416", 'lng' => "16.911454", 'type' => 1]), //ok
			Model_Marker::forge(['lat' => "52.399930", 'lng' => "16.927358", 'type' => 1]), //ok
			Model_Marker::forge(['lat' => "52.395114", 'lng' => "16.904532", 'type' => 3]), //ok
			Model_Marker::forge(['lat' => "52.383994", 'lng' => "16.917570", 'type' => 2])
		];
	}
}