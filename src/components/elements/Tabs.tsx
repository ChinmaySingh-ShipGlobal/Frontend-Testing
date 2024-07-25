import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full overflow-x-auto">
      <TabsList>
        {/* className="grid w-full grid-cols-2" */}
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="account1">Account 1</TabsTrigger>
        <TabsTrigger value="password1">Password 1</TabsTrigger>
        <TabsTrigger value="account2">Account Number</TabsTrigger>
        <TabsTrigger value="password2">Password 2</TabsTrigger>
        <TabsTrigger value="account3">Account 3</TabsTrigger>
        <TabsTrigger value="password3">Password 3</TabsTrigger>
        <TabsTrigger value="account4">Account 4 </TabsTrigger>
        <TabsTrigger value="password4">Password 4</TabsTrigger>
        <TabsTrigger value="account5">Account Longer than ever </TabsTrigger>
        <TabsTrigger value="password5">Password 5</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account Content</TabsContent>
      <TabsContent value="password">Password Content</TabsContent>
      <TabsContent value="account1">Account Content 1</TabsContent>
      <TabsContent value="password1">Password Content 1</TabsContent>
      <TabsContent value="account2">Account Content 2</TabsContent>
      <TabsContent value="password2">Password Content 2</TabsContent>
      <TabsContent value="account3">Account Content 3 </TabsContent>
      <TabsContent value="password3">Password Content 3</TabsContent>
      <TabsContent value="account4">Account Content 4</TabsContent>
      <TabsContent value="password4">Password Content 4</TabsContent>
      <TabsContent value="account5">Account Content 5</TabsContent>
      <TabsContent value="password5">Password Content 5</TabsContent>
    </Tabs>
  );
}
