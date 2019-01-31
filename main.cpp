#include<iostream>
#include<fstream>
#include<cstdio>
#define ld long double
#define MAXN 55
#define eps 1e-7
using namespace std;
int n=0;
ld x[MAXN],y[MAXN],e[MAXN],a=0,b=0,w=0,cost=0,delta=0,precost=0;
ifstream fin;
ofstream fout;
string cmd="";
void init();
void train();
void save();
void getdata();
void calc();
void godown();
ld hypothesis(const ld&);
ld sqr(const ld&);
int main()
{
  register int yr=0;
  for(;(cout<<"/>")&&(cin>>cmd);)
  {
    if(cmd=="init")
    {
      init();
      continue;
    }
    if(cmd=="train")
    {
      train();
      continue;
    }
    if(cmd=="save")
    {
      save();
      continue;
    }
    if(cmd=="echo")
    {
      cout<<"w="<<w<<';'<<"b="<<b<<';'<<endl;
      continue;
    }
    if(cmd=="predict")
    {
      cin>>yr;
      cout<<"Result:"<<hypothesis(yr)<<endl;
      continue;
    }
    if(cmd=="exit")
    {
      cout<<"Exit.."<<endl;
      break;
    }
  }
  return 0;
}
void godown()
{
  register int i=0;
  for(i=1,delta=0;i<=n;++i)
  {
    delta+=(e[i]-y[i])*x[i];
  }
  delta/=n;
  delta*=a;
  w+=delta;
  for(i=1,delta=0;i<=n;++i)
  {
    delta+=e[i]-y[i];
  }
  delta/=n;
  delta*=a;
  b+=delta;
  return;
}
ld sqr(const ld &x)
{
  return x*x;
}
void save()
{
  system("date > result.txt");
  fout.open("result.txt",ios::out|ios::app);
  fout<<w<<endl;
  fout<<b<<endl;
  fout.close();
  return;
}
ld hypothesis(const ld &x)
{
  return w*x+b;
}
void calc()
{
  register int i=0;
  for(i=1;i<=n;++i)
  {
    e[i]=hypothesis(x[i]);
  }
  for(i=1,cost=0;i<=n;++i)
  {
    cost+=sqr(e[i]-y[i]);
  }
  cost/=n*2;
  return;
}
void train()
{
  register int t=0;
  for(;;++t)
  {
    cout<<"Train "<<t<<':';
    calc();
    cout<<"cost="<<cost<<endl;
    if(abs(precost-cost)<eps)
    {
      break;
    }
    precost=cost;
    godown();
  }
  cout<<"Converged"<<endl;
  return;
}
void getdata()
{
  register int i=0;
  fin.open("data.txt");
  for(i=1;fin>>x[i]>>y[i];++i);
  n=i-1;
  fin.close();
  return;
}
void init()
{
  a=0.007;
  b=1926;
  w=-0.817;
  getdata();
  cout<<"Initialized.."<<endl;
  return;
}
