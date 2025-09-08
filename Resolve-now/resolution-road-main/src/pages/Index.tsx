import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ComplaintForm from "@/components/ComplaintForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatusBadge from "@/components/StatusBadge";
import { Clock, User, MessageCircle } from "lucide-react";

const Index = () => {
  // Mock data for complaints
  const complaints = [
    {
      id: "RN-2024-001",
      subject: "Product Quality Issue",
      category: "Product",
      status: "resolved" as const,
      createdAt: "2024-01-15",
      assignedAgent: "Sarah Johnson"
    },
    {
      id: "RN-2024-002", 
      subject: "Service Delivery Delay",
      category: "Service",
      status: "in-progress" as const,
      createdAt: "2024-01-18",
      assignedAgent: "Mike Chen"
    },
    {
      id: "RN-2024-003",
      subject: "Billing Discrepancy",
      category: "Billing",
      status: "pending" as const,
      createdAt: "2024-01-20",
      assignedAgent: null
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <Hero />
        <Features />
        
        {/* Dashboard Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Complaint Management Dashboard
              </h2>
              <p className="text-xl text-muted-foreground">
                Submit new complaints and track existing ones in real-time
              </p>
            </div>

            <Tabs defaultValue="submit" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="submit">Submit Complaint</TabsTrigger>
                <TabsTrigger value="track">My Complaints</TabsTrigger>
              </TabsList>
              
              <TabsContent value="submit" className="space-y-6">
                <ComplaintForm />
              </TabsContent>
              
              <TabsContent value="track" className="space-y-6">
                <div className="grid gap-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-semibold">Your Complaints</h3>
                    <p className="text-muted-foreground">
                      Track the progress of all your submitted complaints
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {complaints.map((complaint) => (
                      <Card key={complaint.id} className="hover:shadow-medium transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{complaint.subject}</CardTitle>
                            <StatusBadge status={complaint.status} />
                          </div>
                          <div className="text-sm text-muted-foreground">
                            Complaint ID: {complaint.id}
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4 text-muted-foreground" />
                                <span>Created: {complaint.createdAt}</span>
                              </div>
                              {complaint.assignedAgent && (
                                <div className="flex items-center space-x-1">
                                  <User className="h-4 w-4 text-muted-foreground" />
                                  <span>Agent: {complaint.assignedAgent}</span>
                                </div>
                              )}
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                                {complaint.category}
                              </span>
                              <MessageCircle className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-primary" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                How ResolveNow Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Simple, transparent process from complaint submission to resolution
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  1
                </div>
                <h3 className="text-xl font-semibold">Register & Submit</h3>
                <p className="text-muted-foreground">
                  Create your account and submit your complaint with all relevant details and attachments.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  2
                </div>
                <h3 className="text-xl font-semibold">Auto Assignment</h3>
                <p className="text-muted-foreground">
                  Our system intelligently routes your complaint to the appropriate department and agent.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  3
                </div>
                <h3 className="text-xl font-semibold">Track Progress</h3>
                <p className="text-muted-foreground">
                  Receive real-time updates and communicate directly with your assigned agent.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  4
                </div>
                <h3 className="text-xl font-semibold">Resolution</h3>
                <p className="text-muted-foreground">
                  Get your issue resolved and provide feedback to help us improve our service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section id="security" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Enterprise-Grade Security
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Your data is protected with industry-leading security measures
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto">
                    🔒
                  </div>
                  <h3 className="text-lg font-semibold">End-to-End Encryption</h3>
                  <p className="text-muted-foreground text-sm">
                    All data is encrypted in transit and at rest using AES-256 encryption.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto">
                    🛡️
                  </div>
                  <h3 className="text-lg font-semibold">GDPR Compliant</h3>
                  <p className="text-muted-foreground text-sm">
                    Full compliance with GDPR and other data protection regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto">
                    🔐
                  </div>
                  <h3 className="text-lg font-semibold">Secure Access</h3>
                  <p className="text-muted-foreground text-sm">
                    Multi-factor authentication and role-based access controls.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-2xl font-bold">ResolveNow</span>
            </div>
            <p className="text-muted-foreground">
              Your trusted platform for efficient complaint management and resolution.
            </p>
            <div className="text-sm text-muted-foreground">
              © 2024 ResolveNow. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;