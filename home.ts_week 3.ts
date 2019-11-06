import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//Used to update Title of App
  title = "Grocery";
//Used to render grocery list items
  items = [
    {
    name: "Cookies",
    quantity:2
  },
  {
    name: "Pancake Mix",
    quantity:1
  },
  {
    name: "Tortilla Chips",
    quantity:2
  },
  {
    name: "Cereal",
    quantity:1
  },
  {
    name: "Milk",
    quantity:1
  },
  {
    name: "Eggs",
    quantity:2
  },
  {
    name: "Shredded Cheese",
    quantity:3
  },
  {
    name: "Turkey",
    quantity:1
  },
  {
    name: "Salad Dressing",
    quantity:2
  },
];

//Reading what was imported above
  constructor(public navCtrl: NavController,public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }

  //Used to remove grocery items from list
  removeItem(item, index){
    console.log("Removing Item - ", item, index);
    //Toast feature to display message when item removed
    const toast = this.toastCtrl.create({
      message: 'Removing Item - ' + item.name + "...",
      duration: 3000 //Display for 3 seconds
    });
    toast.present();

    this.items.splice(index, 1);//remove statement
  }
  //Used to add new grocery items to the list
  addItem(){
    console.log("Adding Item");
    this.showAddItemPrompt();//call function
  }

//Function to add new grocery items to list
  showAddItemPrompt() {
    const prompt = this.alertCtrl.create({
     title: 'Add Item',
     message: "Please enter item...",
     inputs: [
       {
         name: 'name',
         placeholder: 'Name'
       },
       {
        name: 'quantity',
        placeholder: 'Quantity'
      },
     ],
     buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
     {
      text: 'Save',
      handler: item => {
        console.log('Save clicked',item);
        this.items.push(item);//used to save new entered grocery items to current list of items
      }
    }
     
  ] 
});
prompt.present();
}
}
