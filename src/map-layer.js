import { LeafletMap2 } from 'test_module';

LeafletMap2.prototype.initLayerModule = function() {
	console.log('upgraded function from extension works');
	return 'success using extension';
}
