(function () {
	'use strict';

	var versliert = require('../js/verslierteraar.js');
	var chai = require('chai');
	var expect = chai.expect;

	// Unit
	describe('Verslierteraar', function () {

		// Beschrijf resultaat van onderdeel
		it('should make pasta from pasta dough', function () {
			// Voer de test uit
			expect(versliert('pastadeeg'))
				  .to.be.a('string')
				  .and.equal('spaghetti');
		});

		// Beschrijf resultaat van onderdeel
		it('should make mihoen from rice flower', function () {
			// Voer de test uit
			expect(versliert('rijstbloem'))
				  .to.be.a('string')
				  .and.equal('mihoen');
		});

		// Beschrijf resultaat van onderdeel
		it('should make minced meat of meat', function () {
			// Voer de test uit
			expect(versliert('vlees'))
				  .to.be.a('string') 
				  .and.equal('gehakt');
		});

	});

}());