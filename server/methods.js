import {Meteor} from 'meteor/meteor';
import {HTTP} from 'meteor/http';
import {Lenses, Points} from '/lib/collections';

Meteor.methods({

    'lens.create'(name){
        Lenses.insert({name: name, points: {}});
    },

    'lens.addPoint'(lensId, data, lng, lat){
        Points.insert({lensId: lensId, loc: {type: "Point", coordinates: [lng, lat]}, data: data});
    },

    'lens.delPoint'(id){
        Points.remove({_id:id});
    },

    'lens.delete'(id){
        Lenses.remove({_id:id});
    },

    'fetchCrashData'(){
        HTTP.get('https://data.pa.gov/resource/gbsa-2v4n.json', {params: {'$limit': 5000}}, (err, response) => {
            response.data.forEach(function(obj, index, arr){
                try{ if (obj.location_1) Points.insert({_id: obj.crn, lensId: 'Collisions', loc: obj.location_1, data: {name: obj.collision_type, text: 'Fatalities: ' + obj.fatal_count}}); } catch(e){}
            });
        });
    },


    'fetchHistoricLandmarks'(){
        HTTP.get('https://data.pa.gov/resource/ug4h-nsj9.json', {params: {'$limit': 5000}}, (err, response) => {
            response.data.forEach(function(obj, index, arr){
                try{ if (obj.location_1) Points.insert({_id: obj.historicalmarkerid, lensId: 'Historic Landmarks', loc: obj.location_1, data: {name: obj.name, text: obj.markertext}}); } catch(e){}
            });
        });
    }

});