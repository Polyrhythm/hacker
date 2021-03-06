Meteor.methods({
  createDescription: function(text) {
    if (text == "") {
      throw new Meteor.Error(204, 'must have content to change description');
    } else {
      console.log('replacing ' + Meteor.user().profile.about + ' with ' + text);
      return Meteor.users.update({ _id: this.userId}, {$set:{ "profile.about": text }});
    }
  },
  createTools: function(toolList) {
    if (toolList == []) {
      throw new Meteor.Error(204, 'must have content to change tools');
    } else {
      console.log('replacing ' + Meteor.user().profile.tools + ' with ' + toolList);
      return Meteor.users.update({ _id: this.userId}, {$set:{ "profile.tools": toolList }});
    }
  }
});
