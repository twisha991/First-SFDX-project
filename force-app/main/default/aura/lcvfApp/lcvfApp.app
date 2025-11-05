<!-- 
Lightning Dependency App
this app must do
1.  Set control accss to GLOBAL
2. Extend it either from ltng:outApp or ltng:outAppUnstyled
3. List all depedencies of every component that is being referenced in a call
    to $Lightning.createComponent();
-->
<aura:application access="GLOBAL" extends="ltng:outApp">

    <!-- Aura Comp -->
     <aura:dependency resource="c:lcvfComp" />

    <!-- LWC -->
    <aura:dependency resource="c:greetComp" />

    <!-- Aura Comp Built-In -->
    <aura:dependency resource="lightning:button" />
</aura:application>