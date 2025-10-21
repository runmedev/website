---
post_title: "Hardening an Ubuntu Server with Runme"
post_author: "Eddie Etuk"
post_author_avatar: "eddie-etuk.jpg"
post_author_url: "https://www.linkedin.com/in/edeediong"
date: "2023-12-05"
post_image: "hardening-ubuntu-cover.jpg"
post_excerpt: "System hardening is an essential practice that involve securing a system by reducing its vulnerability footprint.

But what if we could automate, document and streamline these processes? Enter Runme, a powerful tool that simplifies the deployment of applications and execution of commands."
post_slug: "hardening-ubuntu"
tags: ["developer tools","security","github","automation","notebook"]
category: "tutorials"
post_date_in_url: false
post_og_image: "hero"
posts_related: []
id: "clpskjyt40esm0alnq0dgg0bs"
stage: "PUBLISHED"
archive: false
canonical_url: ""
runme_blog: true
---
## Hardening Ubuntu

In the digital age, cybersecurity is paramount. For DevOps operators who spin up ubuntu machines, ubuntu server hardening  means regular software updates, avoiding firewall misconfigurations, and protective measures against cyber attacks. System hardening is an essential practice that involve securing a system by reducing its vulnerability footprint.

But what if we could automate, document and streamline these processes? Enter Runme, a powerful tool that simplifies the deployment of applications and execution of commands. 

This blog post will guide you through enhancing your ubuntu system's security using Runme to harden your ubuntu server.

## **Getting Started with Runme**

Before diving into the security enhancements, ensure you have Runme installed on your system. Runme allows you to execute commands in markdown files and deploy applications quickly, making it an ideal companion for managing ubuntu security. With Runme, the documentation is kept up-to-date and “alive”. Follow the [Runme documentation](https://docs.runme.dev/getting-started/) to get set up.

You can confidently connect to your server with [Runme via ssh](https://docs.runme.dev/getting-started/runme-via-ssh) and execute your precise instructions using your markdown docs. As an example, you can use Runme to harden your server by following a [runbook](https://github.com/stateful/vscode-runme/blob/main/examples/hardening/server.md).

### Server Hardening

Below are some steps to enhance your server's overall security posture, encourage continuous improvement, and safeguard against future attacks: 

- Automating Updates and Upgrades
- Configuring UFW with Runme
- Protecting Against Brute-Force Attacks
- Implementing Automatic Security Updates
- Auditing System Events with Auditd
- Securing Shared Memory

- **NOTE:** The commands displayed in the following section are for ubuntu servers but you can adapt the idea for whatever Linux OS is being used.

## **Automating Security Updates and Upgrades**

Attackers often exploit software vulnerabilities to gain unauthorized access or disrupt services. Regular updates patch these vulnerabilities and fix bugs, which can prevent potential security breaches. With Runme, you can automate the update and upgrade process of your ubuntu system. Here's how to create a Runme configuration that keeps your system up-to-date:

### **Create a `runme.md` File**

```yaml
sudo apt update && sudo apt upgrade -y
sudo apt dist-upgrade
sudo reboot
```

These commands update the package lists for upgrades, apply those upgrades along with any distribution upgrades that include handling changes in dependencies, and then reboot the system to ensure all updates are correctly applied.

## **Configuring UFW with Runme**

A firewall acts as a barrier between your server and the internet, controlling incoming and outgoing traffic based on predetermined security rules. These commands install UFW (Uncomplicated Firewall), set it to deny all incoming traffic except for SSH, allow all outgoing traffic, and then enable the firewall to start protecting the system immediately and on boot. Adequately configured firewall rules can prevent unauthorized access to your server. 

### **Update `runme.md` for Uncompliated Firewall**

```yaml
sudo apt install -y ufw
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw enable
```

Add this task to your **`runme.md`** to install and configure UFW with the default rules and enable SSH.

## **Protecting Against Brute-Force Attacks**

Brute-force attacks are a common method attackers use to gain server access by trying numerous password combinations. Fail2Ban helps to block these attempts by banning IP addresses that exhibit some suspicious behaviors like multiple failed login attempts in a short period, pattern matching, etc .

Here is how Automate its installation and configuration with Runme:

### **Extend `runme.md` for Fail2Ban**

```yaml
sudo apt install -y fail2ban
sudo systemctl enable fail2ban
sudo systemctl start fail2ban
```

## **Implementing Automatic Security Updates**

Security threats evolve rapidly, and so must our defenses. Automated security updates ensure the server is not vulnerable to known threats for longer than necessary. With the rapid evolution of threats, reducing the window of exposure of your system is very critical.

### **Automate Security Updates in `runme.md`**

```yaml
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure --priority=low unattended-upgrades
```

## **Auditing System Events with Auditd**

Auditing provides a record of what has happened on your server. In the event of a security incident, these logs are crucial for understanding the scope of the breach and for forensic analysis. Here is how to configure Auditd with Runme:

```yaml
sudo apt install -y auditd
sudo systemctl enable auditd
sudo systemctl start auditd
```

## **Securing Shared Memory**

Shared memory can be exploited by attackers to execute arbitrary code or to escalate privileges on a system. Securing it helps to mitigate such attacks. To secure shared memory, you can append the necessary configuration to /etc/fstab.

### **Secure Shared Memory in `runme.md`**

```yaml
echo "tmpfs /run/shm tmpfs defaults,noexec,nosuid 0 0" | sudo tee -a /etc/fstab
```

## **Running Your Security Tasks**

With your **`runme.md`** file configured, you can execute the tasks using the Runme command:

```bash
runme run update_system
runme run configure_firewall
runme run setup_fail2ban
runme run auto_security_updates
runme run install_auditd
runme run secure_shared_memory
```

Each **`runme run <task_name>`** command will execute the corresponding task, streamlining the process of securing your ubuntu system.

## Try It Out

By leveraging Runme, you can automate the essential security tasks for your ubuntu system, ensuring it remains updated, protected, and secure. This approach not only saves time but also reduces the risk of human error, providing peace of mind in a world where cybersecurity threats are constantly evolving. Remember, a secure system is the foundation of trust in the digital space. Stay vigilant and automate wisely!

As always, please join our **[Discord server](https://discord.gg/runme)** or file a **[ticket on GitHub](https://github.com/stateful/runme/new)** with any questions or ideas you might have. If you haven't already, please **[try Runme](https://marketplace.visualstudio.com/items?itemName=stateful.runme)**. Thank you.
