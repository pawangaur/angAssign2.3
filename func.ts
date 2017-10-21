class User{
private username:string;
getter():string{
if(this.username)
return 'The username '+this.username+' is a valid user.';
else
return 'The user is not valid';
}
setter(val:string):void{
this.username=val;
}

}
