# Installation Note

1. Pre require
   1. Ubuntu 24.04

2. Install ROS2 jazzy
   ```bash
   # Set locate 
   locale  # check for UTF-8
   
   sudo apt update && sudo apt install locales
   sudo locale-gen en_US en_US.UTF-8
   sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
   export LANG=en_US.UTF-8
   
   locale  # verify settings
   
   # Add repository
   sudo apt install software-properties-common
   sudo add-apt-repository universe
   
   
   # Add ROS 2 GPG key 
   sudo apt update && sudo apt install curl -y
   sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
   
   #Add Source list
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
   
   #Install development tools
   sudo apt update && sudo apt install ros-dev-tools
   
   #Install ROS2
   sudo apt update
   sudo apt upgrade
   sudo apt install ros-jazzy-desktop
   sudo apt install ros-jazzy-rmf-building-map-msgs
   ```

3.Download this reposity and unzip in home directory ~/
![image](https://github.com/user-attachments/assets/5bbe39e9-39fb-4849-9dda-97af885917a5)


4.Edit .bashrc and add this
   ```bash
   source /opt/ros/jazzy/setup.bash
   source ~/rmf_ws/install/setup.bash
   export RMW_IMPLEMENTATION=rmw_cyclonedds_cpp
   export ROS_DOMAIN_ID=112
   ```

5. Build rmf_ws
   ```bash
   cd ~/rmf_ws
   colcon build
   source install/setup.bash
   ```

6.RMF web install  
   ```bash
   #install pnpm
   curl -fsSL https://get.pnpm.io/install.sh | bash -

   # set pnpm env
   source ~/.bashrc
   pnpm env use --global lts

   # install pip
   sudo apt install python3-pip
   sudo apt install python3-venv

   # Install dependencies
   cd rmf_web
   pnpm install
   ```

7. Run api server

   ```bash
   cd ~/rmf_web/packages/api-server
   pnpm start
   ```

8. Run Dashboard
   ```bash
   cd ~/rmf_web/packages/rmf-dashboard-framework
   pnpm start:example examples/demo
   ```


# Reference Link 
   1.https://github.com/open-rmf/rmf-web?tab=readme-ov-file#install-dependencies

   2.https://github.com/open-rmf/rmf_internal_msgs
