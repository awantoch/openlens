
import {Meteor} from 'meteor/meteor';
import {Lenses} from '/lib/collections';

Meteor.publish('lenses', function(){
    return Lenses.find();
});