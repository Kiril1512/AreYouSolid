import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {

  points: number;
  click: boolean;

  code = `
  class Post
  {
      void CreatePost(Database db, string postMessage)
      {
          db.Add(postMessage);
      }
  }
  
  class TagPost : Post
  {
      override void CreatePost(Database db, string postMessage)
      {
          db.AddAsTag(postMessage);
      }
  }
  
  class MentionPost : Post
  {
      void CreateMentionPost(Database db, string postMessage)
      {
          string user = postMessage.parseUser();
  
          db.NotifyUser(user);
          db.OverrideExistingMention(user, postMessage);
          base.CreatePost(db, postMessage);
      }
  }
  
  class PostHandler
  {
      private database = new Database();
  
      void HandleNewPosts() {
          List<string> newPosts = database.getUnhandledPostsMessages();
  
          foreach (string postMessage in newPosts)
          {
              Post post;
  
              if (postMessage.StartsWith("#"))
              {
                  post = new TagPost();
              }
              else if (postMessage.StartsWith("@"))
              {
                  post = new MentionPost();
              }
              else {
                  post = new Post();
              }
  
              post.CreatePost(database, postMessage);
          }
      }
  }`

  constructor() { }

  ngOnInit() {
    this.points = 0;
    this.click = false;
  }

  //this method recives the click event
  clicked(answer: string) {
    console.log(answer);
    this.click = true;

    //call the method to check the anwser
    this.checkAnswer(answer);
  }

  //this method returns if the click event was triggered
  isClicked() {
    return this.click;
  }

  //this method clears the click event
  cleanClick() {
    this.click = false;
    console.log(this.click)
  }

  //this methods verify if answer is correct to add points
  checkAnswer(answer: string) {
    if (answer == "correct") {
      this.points++;
    }
    console.log("Points: " + this.points);
  }
}