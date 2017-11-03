export const Lenses = new Mongo.Collection('lenses');
export const Points = new Mongo.Collection('points');

if (Meteor.isServer) {
	Points.rawCollection().createIndex({"loc": "2dsphere"});
}