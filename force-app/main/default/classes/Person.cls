public class Person {
    
  Public Integer PersonID;
    Public String Name ;
    Public String City;
Static Integer populationInCountry=0;


//Parameterized CTOR
Public Person(integer PersonID, string Name, string City)
{
this.PersonID = PersonID;
    this.Name=Name;
    this.City=City;
    PopulationInCountry++;
}
    Public static Integer getPopulation(){
        Return PopulationInCountry;
    }
}