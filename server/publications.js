
import {Meteor} from 'meteor/meteor';
import {Lenses, Points} from '/lib/collections';

Meteor.publish('lenses', function(){
    return Lenses.find();
});

Meteor.publish('points', function(){
    return Points.find();
});