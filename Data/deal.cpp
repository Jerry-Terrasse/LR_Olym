#include<iostream>
using namespace std;
int n=0;
string s="";
int main()
{
  register int i=0;
  register char c='\0';
  freopen("a.txt","r",stdin);freopen("data.txt","w",stdout);
  for(;getline(cin,s);)
  {
    if(s.find("<i class=\"icon-arrow-right\"></i>")!=-1)
    {
      for(n=0,c=cin.get();(c<'0'||c>'9');c=cin.get());
      for(;c>='0'&&c<='9';c=cin.get())
      {
        n=n*10+c-'0';
      }
      cout<<n<<' ';
      getline(cin,s);
      continue;
    }
    if(s.find("<div class=\"medal gold\">")!=-1)
    {
      getline(cin,s);
      getline(cin,s);
      for(;cin.get()!='>';);
      for(s="";(c=cin.get())!='<';s+=c);
      cout<<s<<endl;
    }
  }
  return 0;
}
