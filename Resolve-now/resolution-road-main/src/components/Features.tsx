import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  UserCheck, 
  FileText, 
  Bell, 
  MessageSquare, 
  Route, 
  Shield,
  Clock,
  BarChart3
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: UserCheck,
      title: "User Registration",
      description: "Secure account creation with email verification and personalized dashboards for tracking all your complaints."
    },
    {
      icon: FileText,
      title: "Easy Complaint Submission",
      description: "Intuitive forms with file attachment support. Add photos, documents, and detailed descriptions effortlessly."
    },
    {
      icon: Bell,
      title: "Real-time Notifications",
      description: "Get instant updates via email and SMS when your complaint status changes or agents respond."
    },
    {
      icon: MessageSquare,
      title: "Agent Communication",
      description: "Direct messaging with assigned agents for clarifications, updates, and resolution discussions."
    },
    {
      icon: Route,
      title: "Smart Routing",
      description: "Intelligent complaint assignment to the right department and agents based on issue type and urgency."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "End-to-end encryption, secure data storage, and compliance with privacy regulations."
    },
    {
      icon: Clock,
      title: "Progress Tracking",
      description: "Real-time status updates with detailed timelines showing every step of the resolution process."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive reporting and analytics for organizations to improve their complaint resolution processes."
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Powerful Features for Efficient Complaint Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to streamline complaint handling and improve customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <feature.icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;