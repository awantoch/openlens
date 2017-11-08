
import {Meteor} from 'meteor/meteor';
import {Lenses, Points} from '/lib/collections';

Meteor.publish('lenses', function(){
    return Lenses.find();
});

Meteor.publish('points', function(loc){
    return loc ? Points.find({loc: { $near: {
                                           $geometry: {
                                              type: "Point" ,
                                              coordinates: loc
                                           },
                                           $maxDistance: 1000
                                         }}}) : null;
});