#include<iostream>
#include<fstream>
#include<algorithm>
#define MAXN 55
using namespace std;
struct data
{
  int yr;
  long double pt;
}a[MAXN];
int n=0;
ifstream fin;
ofstream fout;
inline bool cmp(const data&,const data&);
int main()
{
  register int i=0;
  fin.open("full_data.txt");
  for(i=1;fin>>a[i].yr>>a[i].pt;++i);
  n=i-1;
  fin.close();
  sort(a+1,a+n+1,cmp);
  fout.open("data.txt");
  for(i=1;a[i].yr<1990;++i);
  for(;i<=n;++i)
  {
    fout<<a[i].yr<<' '<<a[i].pt<<endl;
  }
  fout.close();
  return 0;
}
inline bool cmp(const data &x,const data &y)
{
  return x.yr<y.yr;
}
